import { Modal, Button } from 'antd';
import React, { Component } from 'react';
import LoginContainer from '../containers/LoginContainer';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      confirmLoading: false,
    }
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showModal()  {
    this.setState({
      visible: true,
    });
  }

  handleOk() {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
  }

  handleCancel() {
    this.setState({
      visible: false,
    });
  }

  render() {

      const { visible, confirmLoading, ModalText } = this.state;
      return (
          <div>
            <Button type="primary" onClick={this.showModal}>Login</Button>
            <Modal title="Title"
              visible={visible}
              confirmLoading={confirmLoading}
              footer={''}
              onCancel={this.handleCancel}
            >
              <LoginContainer
                handleCancel={this.handleCancel}
                handleOk={this.handleOk}
              />
            </Modal>
          </div>
        );
  }
}


export default LoginModal;
