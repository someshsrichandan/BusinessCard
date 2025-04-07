import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


function ProjectCard ({ name, image }) {
  return (
    <View>
      <Image
        source={image}
        style={{ height: 150, aspectRatio: 16 / 9 , borderRadius: 10 }}
      />
      <Text style={{ fontSize: 16 }}>{name}</Text>
    </View>
  );
}

export default function App() {
  const handelPress = () => {
    Linking.openURL("mailTo:someshsrichandan@gmail.com");
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={{
                uri: "https://wallpaperbat.com/img/873547-useful-websites-every-front-end.png",
              }}
              style={{ width: "100%", aspectRatio: 16 / 9 }}
            />
            <Image
              source={require("./assets/me1.png")}
              style={{
                width: 150,
                height: 150,
                borderRadius: 75,
                borderWidth: 5,
                borderColor: "white",
                marginTop: -75,
              }}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Somesh Srichandan Sahoo
            </Text>
            <Text>I am full stack developer</Text>
            <StatusBar style="auto" />
            <View style={{ flexDirection: "row", marginVertical: 10, gap: 10 }}>
              <FontAwesome6 name="github" size={24} color="black" />
              <FontAwesome6 name="square-x-twitter" size={24} color="black" />
              <FontAwesome6 name="at" size={24} color="black" />
              <FontAwesome6 name="linkedin" size={24} color="black" />
            </View>
            <Button title="Contact Me" onPress={handelPress} />

            <Text style={{ padding: 10, fontSize: 16 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={{fontWeight: "bold",marginTop: 10 , fontSize: 18}}>
              Project
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                padding: 10,
                gap: 10,
              }}
            >
            <ProjectCard
              name="Qr code generator"
              image={require("./assets/basic.png")}
            />
            <ProjectCard
              name="To Do"
              image={require("./assets/to-do-1.png")}
            />
             <ProjectCard
              name="Weatheer App"
              image={require("./assets/weatherapp.jpg")}
            />
            </ScrollView>
            <StatusBar style="light" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
