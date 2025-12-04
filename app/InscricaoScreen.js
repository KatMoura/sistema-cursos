import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { styles } from '../styles/style-app';

export default function InscricaoScreen({ route, navigation }) {
  const { curso } = route.params;
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleInscrever = () => {
    if (nome.trim() === '' || email.trim() === '') {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos!');
      return;
    }

    Alert.alert(
      'Sucesso! 🎉',
      `Você foi inscrito em "${curso.titulo}"!\n\nNome: ${nome}\nEmail: ${email}`,
      [
        {
          text: 'Voltar para Home',
          onPress: () => navigation.navigate('Home'),
        },
      ]
    );
  };

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
        <Text style={styles.titulo}>Inscrição em Curso</Text>
        <Text style={styles.subtitulo}>{curso.titulo}</Text>
      </View>

      <View style={styles.conteudo}>
        <View style={styles.secao}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#bbb"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <View style={styles.secao}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="seu.email@exemplo.com"
            placeholderTextColor="#bbb"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>


        <View style={styles.resumo}>
          <Text style={styles.labelResumo}>Resumo da Inscrição</Text>
          <View style={styles.linha}>
            <Text style={styles.textoResumo}>Curso:</Text>
            <Text style={styles.textoResumo}>{curso.titulo}</Text>
          </View>
          <View style={styles.linha}>
            <Text style={styles.textoResumo}>Preço:</Text>
            <Text style={[styles.textoResumo, { color: '#0627cbff', fontWeight: 'bold' }]}>
              {curso.preco}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.botaoConfirmar}
        onPress={handleInscrever}
      >
        <Text style={styles.textoBotao}>Confirmar Inscrição</Text>
      </TouchableOpacity>
    </View>
  );
}
