import { Text, View, Image, StyleSheet } from "react-native";

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            Ayo
          </Text>
          <Text style={styles.subTitle}>7.30 am</Text>
        </View>

        <Text numberOfLines={2} style={styles.subTitle}>
          Hello Ayocdvbal fsbvah fbvaf bvaljhkfb valfbvalbfjvafbvlayfbvaf
          vaflvbadfjsv ahsdbvlasbv kandsbv labdsvlaibdfvafdvasfnb
          vaufviaubfvafhkvalfdbsdhfva flhi
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 80,
  },
  content: {
    flex: 1,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  subTitle: {
    // fontSize: 16,
    color: "gray",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
});

export default ChatListItem;
