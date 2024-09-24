import { useState } from "react";
import { View, Image, TextInput } from "react-native";

import styles from "./search.styles";

const Search = ({ onSearch }) => {
  const [keyWord, setKeyWord] = useState('');

  const searchEmployee = () => onSearch(keyWord);

  return (
    <View style={styles.contaner}>
      <Image
        source={require('../../../img/search-interface-symbol.png')}
        style={styles.imglogo}
        size={30}
      />
      <View style={styles.infoBox}>
        <TextInput
          hitSlop={20}
          style={styles.input}
          placeholder="Tìm Kiếm Nhân Viên"
          value={keyWord}
          onChangeText={(text) => setKeyWord(text)}
          onChange={searchEmployee}
        />
      </View>
    </View>
  );
};

export default Search;