import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    fontFamily: 'Arial',
  },

  header: {
    display: 'flex',
    backgroundColor: colors.primary,
    paddingTop: 40,
    paddingBottom: 12,
    paddingHorizontal: 15
  },
  headerHome: {
    display: 'flex',
    backgroundColor: colors.primary,
    paddingTop: 50,
    paddingBottom: 12,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },

  headerTitle: {
    fontSize: 24,
    color: colors.text,
    paddingTop: 10,
    fontVariant: ['small-caps'],
    fontWeight: '500',
  },

  headerSubtitle: {
    color: colors.textSecondary,
    marginBottom: 16,
  },

  listContent: {
    padding: 16,
    paddingBottom: 20,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  vagas: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000ff',
    marginBottom: 8,
    backgroundColor: '#ecf0f1',
    width: '40%',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  botaoVoltar: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  botaoConfirmar: {
    backgroundColor: '#000000ff',
    marginHorizontal: 16,
    marginBottom: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  textoBotaoVoltar: {
    fontSize: 16,
    color: '#414242ff',
    fontWeight: '600',
  },

  imagemCurso: {
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
    width: '100%',
    height: 100,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#001eb2ff',
    paddingLeft: 0,
    padding: 12,
    textAlign: 'start',
  },

  subtitulo: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },

  secao: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c2c2cff',
    marginBottom: 8,
    textTransform: 'uppercase',
  },

  texto: {
    fontSize: 14,
    color: '#3b3b3bff',
    lineHeight: 22,
    marginBottom: 4,
  },


  descricao: {
    fontSize: 14,
    color: '#444444ff',
    marginBottom: 12,
    lineHeight: 20,
  },


  resumo: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#050505ff',
  },

  labelResumo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 12,
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },

  textoResumo: {
    fontSize: 14,
    color: '#555',
    
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ecf0f1',
    paddingTop: 12,
  },

  preco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#001eb2ff',
  },

  botaoInscrever: {
    backgroundColor: '#000000ff',
    marginHorizontal: 16,
    marginBottom: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffffff',
  },

  duracao: {
    fontSize: 12,
    color: '#95a5a6',
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  semResultados: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  semResultadosText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#333',
  },

  semResultadosSub: {
    fontSize: 14,
    color: '#7f8c8d',
  },

});

