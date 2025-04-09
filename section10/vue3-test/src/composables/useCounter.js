import { computed } from "vue";

export default function useCounter(item) {
  console.log("useCounter.js が呼ばれました");
  const increment = () => {
    item.amount++;
    console.log(
      "useCounter.js のincrement が実行されました:" + JSON.stringify(item)
    );
  };
  const decrement = () => {
    item.amount--;
    console.log(
      "useCounter.js のdecrement が実行されました:" + JSON.stringify(item)
    );
  };
  const totalPrice = computed(() => {
    //※引数がcallback関数のため、returnで返却する必要がある
    return item.price * item.amount;
  });
  //作成した関数はreturnで返す
  return { increment, decrement, totalPrice };
}
