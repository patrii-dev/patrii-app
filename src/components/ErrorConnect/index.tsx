import React, { useState } from "react";
import { StatusBar } from "react-native";
import LottieView from "lottie-react-native";

// Styles
import { Button, Container, Desc, LottieContainer, Text } from "./styles";

// Lottie
import error from "../../assets/lotties/error.json";

interface ErrorProps {
  errorText: string;
  webViewRef?: any;
  btnText?: string;
  onPress?: () => void;
}

export function ErrorConnect({
  errorText,
  webViewRef,
  btnText,
  onPress,
}: ErrorProps) {
  const [disabled, setDisabled] = useState(false);

  const reloadPage = () => {
    if (!disabled && webViewRef.current) {
      setDisabled(true);

      setTimeout(() => {
        webViewRef.current.reload();
        setDisabled(false);
      }, 2000);
    }
  };

  return (
    <>
      {/* Status bar color */}
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      <Container>
        <LottieContainer>
          <LottieView
            source={error}
            autoPlay
            loop
            renderMode="AUTOMATIC"
            resizeMode="cover"
            style={{ width: 300, height: 300 }}
          />
        </LottieContainer>

        <Desc>{errorText}</Desc>

        {webViewRef && (
          <Button onPress={onPress ? onPress : reloadPage} disabled={disabled}>
            <Text type={true} disabled={disabled}>
              {btnText}
            </Text>
          </Button>
        )}
      </Container>
    </>
  );
}
