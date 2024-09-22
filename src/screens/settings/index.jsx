import React, { useState, useEffect } from "react";

import { Text } from "react-native";
import { useSelector } from "react-redux";
import { Card, TextInput } from "react-native-paper";

/**
 * Function that return the JSX for SettingsScreen
 * @returns <SettingsScreen />
 */
const SettingsScreen = () => {
  const theme = useSelector((state) => state.theme.theme);
  const [text, setText] = useState("");

  return (
    <>
      <Card style={{ marginVertical: 20, marginHorizontal: 15 }}>
        <Card.Title title="Información personal" />
        <Card.Content>
          <TextInput
            mode="outlined"
            label="Nombre de usuario"
            placeholder=""
            onChangeText={(newText) => console.log("text", newText)}
            right={<TextInput.Affix text="/100" />}
          />
        </Card.Content>
      </Card>
    </>
  );
};

export default SettingsScreen;
