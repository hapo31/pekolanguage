import React, { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import Form from "../../../components/Form";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  makeStyles,
  createStyles,
  Typography,
  Link,
  Container,
} from "@material-ui/core";
import PekolanguageContext from "../../../../pekolang-core/core";
import clsx from "clsx";
import Reference from "../../../components/Reference";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      height: "100%",
      minHeight: "80vh",
    },
    reference: {
      padding: "10px 10px",
      borderRadius: "5px",
      fontSize: "16px",
    },
    expand: {
      transform: "rotate(0deg)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180def)",
    },

    executeButton: {
      border: "solid 2px black",
      margin: "10px 0 10px",
    },
  })
);

const defaultValue = `
きｔらｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯふざけんなぺこｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯきｔらにーんじんマンッぺこだよきｔらｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯふざけんなぺこｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯきｔらにーんじんマンッぺこｱｯｱｯｱｯだよｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯだよだよｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯだよふざけんなにーんじんマンッきｔらｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯふざけんなぺこｱｯｱｯｱｯｱｯｱｯｱｯ
ｱｯｱｯｱｯｱｯｱｯｱｯきｔらにーんじんマンッぺこだよきｔらｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯふざけんなぺこｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯきｔらにーんじんマンッぺこだよきｔらｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯふざけんなぺこｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯきｔらにーんじんマンッぺこだよｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯだよにーんじんにーんじんにーんじんにーんじんにーんじんにーんじんだよにーんじんにーんじんにーんじんにーんじんにーんじんにーんじんにーんじんにーんじんだよふざけんなにーんじんマンッきｔら
ｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯふざけんなぺこｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯきｔらにーんじんマンッぺこｱｯｱｯｱｯだよふざけんなにーんじんマンッｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯｱｯだよ
`.replace("\n", "");

const pekolangState = atom({
  key: "PekolangState",
  default: {
    bfCode: "",
    code: defaultValue,
    output: "",
  },
});

export default () => {
  const classes = useStyles();
  const [state, setState] = useRecoilState(pekolangState);
  const [expanded, setExpanded] = useState(false);

  return (
    <Container className={classes.container}>
      <Box>
        <IconButton
          aria-label="show more"
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <Typography variant="subtitle1">せつめいしょ</Typography>
        </IconButton>
        <Collapse in={expanded} className={classes.reference}>
          <p>
            その1
            <Link href="https://ja.wikipedia.org/wiki/Brainfuck">
              Brainf*ck
            </Link>
          </p>
          <p>その2</p>
          <Reference />
          {/* <p>おまけ(変換を押すと下の「コード」にぺこーら言語を出力)</p>
          <Button
            onClick={async () => {
              const pekolangage = new PekolanguageContext();
              const code = await pekolangage.transpilePekotoBF(state.code);
              setState({
                ...state,
                code,
              });
            }}
          >
            変換
          </Button>
          <Form
            onChange={value => {
              setState({
                ...state,
                bfCode: value,
              });
            }}
            label="Brainf*ck code"
          /> */}
        </Collapse>
      </Box>
      <Box
        style={{
          marginTop: "10px",
        }}
      >
        <Form
          onChange={value => {
            setState({
              ...state,
              code: value,
            });
          }}
          label="コード"
          defaultValue={state.code}
        />
      </Box>
      <Button
        className={classes.executeButton}
        onClick={async () => {
          const pekolangage = new PekolanguageContext();
          const output = await pekolangage.execute(state.code);
          setState({
            ...state,
            output,
          });
        }}
      >
        実行
      </Button>
      <Box>
        <code>{state.output}</code>
      </Box>
    </Container>
  );
};
