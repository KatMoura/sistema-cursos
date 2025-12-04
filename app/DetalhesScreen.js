import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/style-app';

export default function DetalhesScreen({ route, navigation }) {
  const { curso } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.textoBotaoVoltar}>← Voltar</Text>
        </TouchableOpacity>

        <Image
          source={curso.imagem}
          style={styles.imagemCurso}
          resizeMode="cover"
        />
        <Text style={styles.headerTitle}>{curso.titulo}</Text>
      </View>

      <View style={styles.conteudo}>
        <View style={styles.secao}>
          <Text style={styles.label}>Descrição</Text>
          <Text style={styles.texto}>{curso.descricao}</Text>
        </View>
        <View style={styles.secao}>
          <Text style={styles.label}>Duração</Text>
          <Text style={styles.texto}>{curso.duracao}</Text>
        </View>

        <View style={styles.secao}>
          <Text style={styles.label}>Preço</Text>
          <Text style={styles.preco}>{curso.preco}</Text>
        </View>

        <View style={styles.secao}>
          <Text style={styles.label}>Conteúdo do Curso</Text>
          <Text style={styles.texto}>• Conceitos Fundamentais</Text>
          <Text style={styles.texto}>• Prática com Exercícios</Text>
          <Text style={styles.texto}>• Projetos Práticos</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.botaoInscrever}
        onPress={() => navigation.navigate('Inscricao', { curso })}
      >
        <Text style={styles.textoBotao}>Se Inscrever Agora</Text>
      </TouchableOpacity>
    </View>
  );
}