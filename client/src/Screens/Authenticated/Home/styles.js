import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  icon: {
    marginTop: 40,
    alignSelf: 'center'
  },
  searchSection: {
    flexDirection: 'row',
    height: 50,
    width: 375,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F2F3F2',
    marginTop: 30,
    borderRadius: 15
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 0.95,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#F2F3F2',
    color: '#7C7C7C',
  },
})

export default styles;