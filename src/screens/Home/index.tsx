import React, { useEffect, useRef, useState } from "react";
import { BackHandler, Platform, StatusBar, View } from "react-native";
import { WebView } from "react-native-webview";
import NetInfo from "@react-native-community/netinfo";

// styles
import { Container, SplashContainer } from "./styles";

// Images
import { ErrorConnect } from "../../components/ErrorConnect";
import LottieView from "lottie-react-native";

// Lotties
const LoadingAnimation = "../../assets/lotties/loading.json";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(true);

  const webViewRef = useRef<WebView>(null);

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  const handleError = (syntheticEvent: any) => {
    console.error("WebView error: ", syntheticEvent.nativeEvent);
    setIsLoading(false);
  };

  const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;

    if (scrollY <= -120) {
      webViewRef.current && webViewRef.current.reload();
    }
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!isConnected) {
    return (
      <ErrorConnect
        errorText="Sem conexão com a Internet, verifique e tente novamente mais tarde."
        webViewRef={webViewRef}
        btnText="Atualizar"
      />
    );
  }

  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      {/* iPhone */}
      {Platform.OS === "ios" && (
        <View style={{ height: 50, backgroundColor: "black" }} />
      )}

      <WebView
        ref={webViewRef}
        renderToHardwareTextureAndroid={true}
        startInLoadingState={true}
        webviewDebuggingEnabled={false}
        textZoom={100}
        setBuiltInZoomControls={false}
        renderLoading={() => {
          return (
            <Container>
              <LottieView
                source={require(LoadingAnimation)}
                autoPlay
                loop
                style={{
                  width: 300,
                  height: 300,
                }}
              />
            </Container>
          );
        }}
        renderError={() => {
          return (
            <ErrorConnect errorText="Ocorreu um erro, feche e reabre o APP ou tente novamente mais tarde." />
          );
        }}
        source={{ uri: "https://dashboard.patrii.com.br/" }}
        scalesPageToFit={false}
        scrollEnabled={true}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        style={{ backgroundColor: "#fff" }}
        containerStyle={{ backgroundColor: "#fff" }}
        cacheMode={"LOAD_NO_CACHE"}
      />
    </>
  );
}
