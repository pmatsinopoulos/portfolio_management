"use client";

import AccountsController from "@/controllers/accounts_controller";
import { ChangeEvent, MouseEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EXAMPLE_WALLET_ADDRESS = "0xec4a93e2e955d97f0be36e3e3533259629eae7ca";
const EXAMPLE_FRIENDLY_NAME = "Main account";

const NewAccountPage = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const onChangeFormWalletAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      walletAddress: event.target.value,
    });
  };

  const onChangeFormFriendlyName = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      friendlyName: event.target.value,
    });
  };

  const onFormButtonSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    AccountsController.create({
      account: {
        walletAddress: state.walletAddress,
        friendlyName: state.friendlyName,
      },
    });
  };

  return (
    <Form>
      <Form.Group controlId="formWalletAddress">
        <Form.Label>Wallet Address (*)</Form.Label>
        <Form.Control
          type="text"
          placeholder={`e.g. ${EXAMPLE_WALLET_ADDRESS}`}
          autoFocus
          value={state.walletAddress}
          onChange={onChangeFormWalletAddress}
        />
        <Form.Text className="text-muted">
          Your wallet address for this account. It should be unique.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formFriendlyName">
        <Form.Label>Friendly Name (*)</Form.Label>
        <Form.Control
          type="text"
          placeholder={`e.g. ${EXAMPLE_FRIENDLY_NAME}`}
          value={state.friendlyName}
          onChange={onChangeFormFriendlyName}
        />
        <Form.Text className="text-muted">
          A friendly name to identify this account. It should be unique.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={onFormButtonSubmit}>
        Create
      </Button>
    </Form>
  );
};

const INITIAL_STATE = {
  walletAddress: "",
  friendlyName: "",
};

export default NewAccountPage;
