"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const categories_1 = __importDefault(require("./categories"));
const transactions_1 = __importDefault(require("./transactions"));
class Client {
    constructor() {
        this.resetState();
    }
    async resetState() {
        react_native_1.AsyncStorage.setItem("transactions", JSON.stringify(transactions_1.default));
        react_native_1.AsyncStorage.setItem("categories", JSON.stringify(categories_1.default));
    }
    async fetchTransactions() {
        const transactions = await react_native_1.AsyncStorage.getItem("transactions");
        if (!transactions) {
            return [];
        }
        return JSON.parse(transactions);
    }
    async fetchUserCategories() {
        const categories = await react_native_1.AsyncStorage.getItem("categories");
        if (!categories) {
            return [];
        }
        return JSON.parse(categories);
    }
    async fetchTransaction(id) {
        const transactions = await this.fetchTransactions();
        return transactions.find(({ id: itemId }) => id === itemId);
    }
    async fetchUserCategory(id) {
        const categories = await this.fetchUserCategories();
        return categories.find(({ id: itemId }) => id === itemId);
    }
    async updateTransactionUserCategory(transactionId, userCategoryId) {
        const transactions = await this.fetchTransactions();
        const transaction = await this.fetchTransaction(transactionId);
        const category = await this.fetchUserCategory(userCategoryId);
        if (!transaction) {
            throw new Error("Couldn't find transaction");
        }
        if (!category) {
            throw new Error("Couldn't find category");
        }
        const newTransaction = Object.assign({}, transaction, {
            integration: Object.assign({}, transaction.integration, {
                category,
            }),
        });
        const newTransactions = transactions.map((item) => {
            if (item.id === transactionId) {
                return newTransaction;
            }
            return item;
        });
        const update = JSON.stringify(newTransactions);
        await react_native_1.AsyncStorage.setItem("transactions", update);
    }
}
exports.default = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZGF0YS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtDQUE0QztBQUU1Qyw4REFBMkM7QUFDM0Msa0VBQStDO0FBNEMvQyxNQUFxQixNQUFNO0lBQ3pCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVTtRQUNkLDJCQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFpQixDQUFDLENBQUMsQ0FBQztRQUN4RSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBZSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixNQUFNLFlBQVksR0FBRyxNQUFNLDJCQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsS0FBSyxDQUFDLG1CQUFtQjtRQUN2QixNQUFNLFVBQVUsR0FBRyxNQUFNLDJCQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFBVTtRQUMvQixNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3BELE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFVO1FBQ2hDLE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDcEQsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsS0FBSyxDQUFDLDZCQUE2QixDQUNqQyxhQUFxQixFQUNyQixjQUFzQjtRQUV0QixNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3BELE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUMzQztRQUVELE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRTtZQUNwRCxXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLFdBQVcsRUFBRTtnQkFDdEQsUUFBUTthQUNULENBQUM7U0FDSCxDQUFDLENBQUM7UUFFSCxNQUFNLGVBQWUsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDaEQsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLGFBQWEsRUFBRTtnQkFDN0IsT0FBTyxjQUFjLENBQUM7YUFDdkI7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUUvQyxNQUFNLDJCQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0Y7QUF6RUQseUJBeUVDIn0=