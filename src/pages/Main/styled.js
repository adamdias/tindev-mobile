import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  logo: {
    marginTop: 20
  },

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 500
  },

  card: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    margin: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  cardFooter: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 15
  },

  cardAvatar: {
    flex: 1,
    height: 300
  },

  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },

  cardBio: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    lineHeight: 18
  },

  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 30
  },

  cardButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },

  empty: {
    alignSelf: 'center',
    color: '#999',
    fontSize: 24,
    fontWeight: 'bold'
  },

  matchContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,.8)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  itsMatch: {
    height: 60,
    resizeMode: 'contain'
  },

  matchAvatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: '#fff',
    marginVertical: 30
  },

  matchName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF'
  },

  matchBio: {
    marginTop: 10,
    fontSize: 16,
    color: 'rgba(255,255,255,.8)',
    textAlign: 'center',
    paddingHorizontal: 30
  },

  closeMatch: {
    fontSize: 16,
    color: 'rgba(255,255,255,.8)',
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold'
  }
});

export default styles;
