const AccountsController = {
  create: (params: {
    account: { walletAddress: string; friendlyName: string };
  }) => {
    console.log(
      "walletAddress",
      params.account.walletAddress,
      "friendlyName",
      params.account.friendlyName
    );
  },
};

export default AccountsController;
