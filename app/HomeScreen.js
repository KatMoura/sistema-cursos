import { useState, useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Animated, Keyboard, Image } from 'react-native';
import { cursos } from '../data/cursos';
import { styles } from '../styles/style-app';

export default function HomeScreen({ navigation }) {
  const [busca, setBusca] = useState('');
  const larguraAnimada = useRef(new Animated.Value(45)).current;

  const expandirBusca = () => {
    Animated.timing(larguraAnimada, {
      toValue: 210,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const encolherBusca = () => {
    if (busca === '') {
      Animated.timing(larguraAnimada, {
        toValue: 45,
        duration: 300,
        useNativeDriver: false,
      }).start();
      Keyboard.dismiss();
    }
  };

  const cursosFiltrados = cursos.filter((curso) =>
    curso.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    curso.descricao.toLowerCase().includes(busca.toLowerCase())
  );

  const renderCurso = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Detalhes', { curso: item })}
    >
      <Image
        source={item.imagem}
        style={styles.imagemCurso}
        resizeMode="cover"
      />
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <Text style={styles.vagas}>Vagas: {item.vagas ? item.vagas : 'Em Breve'}</Text>
      <View style={styles.footer}>
        <Text style={styles.preco}>{item.preco}</Text>
        <Text style={styles.duracao}>{item.duracao}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerHome}>
        <Text style={styles.headerTitle}>Meus Cursos</Text>

        <Animated.View style={{
          width: larguraAnimada,
          marginLeft: 'auto',
          height: 38,
          overflow: 'hidden',
          backgroundColor: '#cbcbcb3c', // Cor de fundo vem para o container
          borderRadius: 25,
        }}>
          <TextInput
            style={{
              flex: 1,
              width: '100%',
              color: '#0e0d0dff',
              paddingHorizontal: 10,
              fontSize: 20, // Tamanho da fonte controlado
            }}
            value={busca}
            onChangeText={setBusca}
            placeholder='🔍︎'
            placeholderTextColor="#000000ff"
            onFocus={expandirBusca}
            onBlur={encolherBusca}
          />
        </Animated.View>
      </View>

      {cursosFiltrados.length > 0 ? (
        <FlatList
          data={cursosFiltrados}
          renderItem={renderCurso}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          scrollEnabled={true}
        />
      ) : (
        <View style={styles.semResultados}>
          <Text style={styles.semResultadosText}>Nenhum curso encontrado</Text>
          <Text style={styles.semResultadosSub}>Tente buscar por outro termo</Text>
        </View>
      )}
    </View>
  );
}