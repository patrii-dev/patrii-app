import styled from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Container2 = styled.SafeAreaView``;

export const SplashContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 60%;
  height: 100%;
  margin-bottom: 10px;
  max-height: 182px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
`;
