import styled from "styled-components/native";

interface ErrorProps {
  type?: boolean;
  disabled?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Text = styled.Text<ErrorProps>`
  color: ${({ theme, type, disabled }) => {
    if (disabled) {
      return theme.colors.white;
    } else {
      return type ? theme.colors.primary : theme.colors.primary;
    }
  }};

  font-weight: ${({ type }) => (type ? 600 : 400)};
  max-width: 300px;
  text-align: center;
  font-size: 16px;
`;

export const Desc = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  max-width: 300px;
  text-align: center;
  font-size: 16px;
`;

export const LottieContainer = styled.View`
  width: 300px;
  height: 300px;
`;

export const Button = styled.TouchableOpacity<ErrorProps>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.dark : theme.colors.secondary};
  height: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.white};
`;
