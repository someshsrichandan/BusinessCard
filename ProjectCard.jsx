import { Image, Text, View } from "react-native";


export default function ProjectCard ({ name, image }) {
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