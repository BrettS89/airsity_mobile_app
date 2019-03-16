import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { Spinner } from './Spinner';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
});

class LoadingScreen extends React.Component {
  render() {
    return (
      <Modal
        transparent 
        visible={this.props.state.loading} 
        animationType="fade"
        // onRequestClose={() => this.props.closeModal()}
      >
        <View style={styles.modalContainer}>
          <Spinner />
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  state: {
    loading: state.app.loading,
  },
});

export default connect(mapStateToProps)(LoadingScreen);
