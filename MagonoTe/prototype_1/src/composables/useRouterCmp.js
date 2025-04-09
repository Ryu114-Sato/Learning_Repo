import { useRouter, useRoute, onBeforeRouteLeave } from "vue-router";

export default function useRouterCmp() {
  console.log("useRouterCmp/gamenId:");
  //一度定数にすることが推奨となっている
  const router = useRouter();
  const route = useRoute();

  const goLogin = async () => {
    router.push("/login");
  };
  const checkRoutePath = () => {
    console.log(route.path);
  };
  const goTop = () => {
    router.push("/topView");
  };
  const goManageTop = () => {
    router.push("/manageTopView");
  };
  //vue router 実行時にこの関数の中が実行される
  onBeforeRouteLeave((to, from) => {
    console.log(`to: ${to}`);
    console.log(`from: ${from}`);
  });
  return {
    goLogin,
    checkRoutePath,
    goTop,
    goManageTop,
  };
}
