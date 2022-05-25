import React from "react";
import { render } from "react-dom";
import { Button } from "rsuite";
import { Cascader } from "rsuite";

import "rsuite/dist/rsuite.min.css";

const data = [
  {
    value: "1",
    label: "A",
    children: [
      {
        label: "AA",
        value: "1-1",
        children: [
          {
            value: "1-1-1",
            label: "AAA"
          },
          {
            value: "1-1-2",
            label: "AAB"
          },
          {
            value: "1-1-3",
            label: "AAC"
          },
          {
            value: "1-1-4",
            label: "AAD"
          },
          {
            value: "1-1-5",
            label: "AAE"
          }
        ]
      },
      {
        value: "1-2",
        label: "AB",
        children: [
          {
            value: "1-2-1",
            label: "ABA"
          },
          {
            value: "1-2-2",
            label: "ABB"
          },
          {
            value: "1-2-3",
            label: "ABC"
          },
          {
            value: "1-2-4",
            label: "ABD"
          },
          {
            value: "1-2-5",
            label: "ABE"
          },
          {
            value: "1-2-6",
            label: "ABF"
          }
        ]
      },
      {
        value: "1-3",
        label: "AC",
        children: [
          {
            value: "1-3-1",
            label: "ACA"
          },
          {
            value: "1-3-2",
            label: "ACB"
          },
          {
            value: "1-3-3",
            label: "ACC"
          },
          {
            value: "1-3-4",
            label: "ACD"
          },
          {
            value: "1-3-5",
            label: "ACE"
          }
        ]
      }
    ]
  },
  {
    label: "BA",
    value: "2",
    children: [
      {
        value: "2-1",
        label: "BAA",
        children: [
          {
            value: "2-1-1",
            label: "BAB"
          },
          {
            value: "2-1-2",
            label: "BAC"
          },
          {
            value: "2-1-3",
            label: "BAD"
          },
          {
            value: "2-1-4",
            label: "BAE"
          },
          {
            value: "2-1-5",
            label: "BAF"
          },
          {
            value: "2-1-6",
            label: "BAG"
          },
          {
            value: "2-1-7",
            label: "BAH"
          },
          {
            value: "2-1-8",
            label: "BAI"
          },
          {
            value: "2-1-9",
            label: "BAJ"
          },
          {
            value: "2-1-10",
            label: "BAK"
          }
        ]
      },
      {
        value: "2-2",
        label: "CA",
        children: [
          {
            value: "2-2-1",
            label: "CAA"
          },
          {
            value: "2-2-2",
            label: "CAB"
          },
          {
            value: "2-2-3",
            label: "CAC"
          },
          {
            value: "2-2-4",
            label: "CAD"
          }
        ]
      },
      {
        value: "2-3",
        label: "CB",
        children: [
          {
            value: "2-3-1",
            label: "CBA"
          },
          {
            value: "2-3-2",
            label: "CBB"
          },
          {
            value: "2-3-3",
            label: "CBC"
          },
          {
            value: "2-3-4",
            label: "CBD"
          },
          {
            value: "2-3-5",
            label: "CBE"
          },
          {
            value: "2-3-6",
            label: "CBF"
          },
          {
            value: "2-3-7",
            label: "CBG"
          },
          {
            value: "2-3-8",
            label: "CBH"
          },
          {
            value: "2-3-9",
            label: "CBI"
          },
          {
            value: "2-3-10",
            label: "CBJ"
          },
          {
            value: "2-3-11",
            label: "CBK"
          },
          {
            value: "2-3-12",
            label: "CBL"
          },
          {
            value: "2-3-13",
            label: "CBM"
          },
          {
            value: "2-3-14",
            label: "CBN"
          }
        ]
      },
      {
        value: "2-4",
        label: "DA",
        children: [
          {
            value: "2-4-1",
            label: "DAA"
          },
          {
            value: "2-4-2",
            label: "DAB"
          },
          {
            value: "2-4-3",
            label: "DAC"
          },
          {
            value: "2-4-4",
            label: "DAD"
          },
          {
            value: "2-4-5",
            label: "DAE"
          },
          {
            value: "2-4-6",
            label: "DAF"
          }
        ]
      }
    ]
  }
];

const styles = {
  padding: 20,
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Button>Hello World</Button>
    <Cascader data={data} style={{ width: 224 }} />
  </div>
);

render(<App />, document.getElementById("root"));
