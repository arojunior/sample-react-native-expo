# Brex Mobile Coding Challenge

This repository includes the description of Brex's Mobile Code Challenge, the
code for the mock data client that you will need to use, and all the assets
exported from Figma.

It also has a React Native with Expo and TypeScript project bootstraped. If you
are comfortable with such setup feel free to use it. You can also go with your
own setup if you want.

## Goals

You are working on the Brex mobile app, and you were assigned to implement
the following flows:

1. Display the list of transactions
1. Display details of a specific transaction
1. Change the category of a transaction

The design team handed to the mobile team the following screens on Figma:

https://www.figma.com/file/D4DraKVh3JC8fyhormh4gNRm/Mobile-Coding-Challenge

The application should use the operating system default font. The icon assets
are on `src/icons` directory. If you're using this repo, you can directly
import the SVG file.

Your coworkers created a mock data client to allow for the development of
suchs screens while they implement the real server communications. You need
to use the mock client for fetching data so migrating in the future is easy.

Import it from `src/data` if you are using this repo, or copy `lib/` directory
(and import it) if you are going with your own setup.

The mock client exposes the following interface:

```tsx
export default class Client {
  fetchTransactions(): Promise<Transaction[]>;
  
  fetchUserCategories(): Promise<UserCategory[]>;
  
  fetchTransaction(id: string): Promise<Transaction | undefined>;

  fetchUserCategory(id: string): Promise<UserCategory | undefined>;

  updateTransactionUserCategory(transactionId: string, userCategoryId: string): Promise<void>;
}

export interface Transaction {
  id: string;
  amount: number;
  purchaseTime: string;
  card: Card;
  merchant: Merchant;
  integration: Integration;
  __typename: "Transaction";
}

export interface Card {
  id: string;
  user: string;
  __typename: "Card";
}

export interface Merchant {
  id: string;
  name: "Docusign";
  merchantCategory: MerchantCategory;
  __typename: "Merchant";
  website: string;
}

export interface MerchantCategory {
  id: string;
  name: string;
  __typename: "MerchantCategory";
}

export interface Integration {
  id: string;
  name: string;
  category: UserCategory | null;
}

export interface UserCategory {
  id: string;
  name: string;
  __typename: "UserCategory";
}
```

## Challenge milestones

### Milestone One

- Bootstrap the React Native project in a new Git repo.
- Fetch the list of transactions and categories from the mock data client.
- Print the results of the data fetching using `console.log`.

### Milestone Two

- Create the components needed for the transactions list screen.
- Populate the transactions list on the screen.

### Milestone Three

- Create the components needed for the transaction details screen.
- Populate the transaction data on the screen.

### Milestone Four

- Create the components needed for the category selection screen.
- Populate the categories data on the screen.

### Milestone Five

- Link the touch on a transaction to the details screen.

### Milestone Six

- Link the touch on the "QuickBooks Category" to category selection screen.

### Milestone Seven

- Link the touch on the category to update a transaction category.


