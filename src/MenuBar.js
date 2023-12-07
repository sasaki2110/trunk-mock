import { useState } from "react";
import "@aws-amplify/ui-react/styles.css";
import { 
  Flex, 
  Button, 
  Image,
  Grid, 
  ToggleButton,
} from '@aws-amplify/ui-react';
import { useNavigate } from "react-router-dom";

function Buttons({direction}) {
  const navigate = useNavigate();

  function handleClickHome(){
    navigate("/");
  }

  function handleClickReserv(){
    navigate("/reserv");
  }
  return(
    <Flex direction={direction}>
      <Button border="none" onClick={handleClickHome}>店舗情報</Button>
      <Button border="none">ご利用ガイド</Button>
      <Button border="none">よくあるご質問</Button>
      <Button border="none" onClick={handleClickReserv}>お問い合わせ・見学予約</Button>
      <Button border="none">ログイン</Button>
    </Flex>
)
}

// メニューバー１（PC用）
// Gridで５フレームを横方向に用意
// 何も指定せずにイメージを置いたら１フレーム目に入った
// 残りを右寄せのFlexとして、２フレーム目から配置。なぜエンドは６？？？
function MenuBar1() {
  return(
    <Grid templateColumns="1fr 1fr 1fr 1fr 1fr">
      <Image 
        src="logo192.png"
        height="5em"
      />

      <Flex
        justifyContent="flex-end"
        columnStart="2"
        columnEnd="6"
      >
        <Buttons direction="row"/>
      </Flex>
    </Grid>
  )
}

// メニューバー２（スマホ用）
// 「三」ボタンでメニューバーとトグルする
// 適当に自作したけど、本当はReact-UI のMenuを使えばいいかも？
function MenuBar2() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick(){
    setIsOpen(!isOpen);
  }

  function ToggleMenu(){
    if(!isOpen){return}
    return(
      <Flex 
        justifyContent="flex-end"
        columnStart="1"
        columnEnd="6"
        direction="column"
      >
        <Buttons direction="column"/>
      </Flex>
    )
  }

  return(
    <Grid templateColumns="1fr 1fr 1fr 1fr 1fr">
      <Image 
        src="logo192.png"
        height="5em"
      />

      <Flex
        justifyContent="flex-end"
        columnStart="2"
        columnEnd="6"
      >
        <ToggleButton onClick={handleClick}>三</ToggleButton>
      </Flex>
      <ToggleMenu />
    </Grid>
  )
}

// 実際に画面から使用するメニューバー
// 画面サイズ（ブレークポイント）によって、１か２を切り替える
// ここは適当だから、本当に網羅できているか解らない
export default function MenuBar( { breakPoint } ) {
  if(breakPoint==="small" || breakPoint===null)  {
    return(MenuBar2());
  } else {
    return(MenuBar1());
  }
}
