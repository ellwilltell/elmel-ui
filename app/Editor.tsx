import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";

// Create Puck component config
const config = {
  components: {
    //   HeadingBlock: {
    //     fields: {
    //       children: {
    //         type: "text",
    //       },
    //     },
    //     render: ({ children }) => {
    //       return <h1>{children}</h1>;
    //     },
    //   },
  },
};

// Describe the initial data
const initialData = {};

// Render Puck editor
export default function Editor() {
  return <Puck config={config} data={initialData} />;
}
