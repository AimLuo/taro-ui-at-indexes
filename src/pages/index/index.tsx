import { View, Button } from "@tarojs/components";
import { AtIndexes } from "taro-ui";
import "taro-ui/dist/style/index.scss";

const list = [
  {
    title: "A",
    key: "A",
    items: [
      {
        name: "阿坝"
        // 此处可加其他业务字段
      },
      {
        name: "阿拉善"
      }
    ]
  },
  {
    title: "B",
    key: "B",
    items: [
      {
        name: "北京"
      },
      {
        name: "保定"
      }
    ]
  },
  {
    title: "C",
    key: "C",
    items: [
      {
        name: "1"
      },
      {
        name: "2"
      }
    ]
  },
  {
    title: "D",
    key: "D",
    items: [
      {
        name: "3"
      },
      {
        name: "4"
      }
    ]
  },
  {
    title: "E",
    key: "E",
    items: [
      {
        name: "5"
      },
      {
        name: "6"
      }
    ]
  },
  {
    title: "F",
    key: "F",
    items: [
      {
        name: "5"
      },
      {
        name: "6"
      }
    ]
  },
  {
    title: "G",
    key: "G",
    items: [
      {
        name: "5"
      },
      {
        name: "6"
      }
    ]
  }
];
let fn = null;
export default function AA() {
  return (
    <View style={{ height: "100vh" }}>
      <AtIndexes
        animation
        onScrollIntoView={cfn => {
          fn = cfn;
        }}
        list={list}
      >
        <Button onClick={() => fn("G")}>dianwo</Button>
      </AtIndexes>
    </View>
  );
}
