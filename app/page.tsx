import { ParseExample } from "./ParseExample";
import { ReactHookFormPane } from "./ReactHookFormPane";
import { SafeParseExample } from "./SafeParseExample";

export default function Home() {
  return (
    <div>
      HOME
      <ParseExample />
      <SafeParseExample />
      <ReactHookFormPane />
    </div>
  );
}
