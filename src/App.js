import "@aws-amplify/ui-react/styles.css";
import { 
  Flex, 
  Button, 
  useTheme, 
  View, 
  Image,
  Grid, 
  Label,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@aws-amplify/ui-react';

// メニューバー
// Gridで５フレームを横方向に用意
// 何も指定せずにイメージを置いたら１フレーム目に入った
// 残りを右寄せのFlexとして、２フレーム目から配置。なぜエンドは６？？？
function MenuBar() {
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
        <Button border="none">店舗情報</Button>
        <Button border="none">ご利用ガイド</Button>
        <Button border="none">よくあるご質問</Button>
        <Button border="none">お問い合わせ・見学予約</Button>
        <Button border="none">ログイン</Button>
      </Flex>
    </Grid>
  )
}

function BackUp() {
  return (
    <View>
      <Flex direction="column" maxWidth="90%" margin="0 auto">
        <MenuBar/>
          <h1>トランクルーム掘げほげ</h1>
          <Flex gap="0rem" direction="column">
            <Label height="1rem">◆ここに店舗説明</Label>
            <Label height="1rem">◆ここに店舗説明がならぶはず</Label>
          </Flex>
          <Label>東京都品川区東品川１丁目</Label>
      </Flex>
      <Flex direction="row" maxWidth="90%" margin="0 auto">
        <img src="img/sinagawa1.jpeg" alt="ほんとはピロピロしたい" height="450px"/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.4012566583356!2d139.80864417476812!3d35.667120669996976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018890082b85bc3%3A0xcf533b02ac169ede!2z44Ki44OR44Ob44OG44Or44CI5p2x5Lqs5pyo5aC044CJ!5e0!3m2!1sja!2sjp!4v1701843061344!5m2!1sja!2sjp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Flex>
      <Grid templateColumns="1fr 1fr" maxWidth="90%" margin="0 auto">
        <Flex>
          <Label>ここはほんとはスワイパーを置きたい</Label>
        </Flex>
        <Flex direction="column">
          <Label>住所やら</Label>
          <Label>電話番号やら</Label>
        </Flex>
      </Grid>
    </View>
  );
}

export default function App() {
  const { tokens } = useTheme();

  return (
    <View>
      <Flex direction="column" maxWidth="90%" margin="0 auto">
        <MenuBar/>
          <h1><font  color={tokens.colors.red[40]}>トランクルーム掘げほげ</font></h1>
          <Flex gap="0rem" direction="column">
            <Label height="1rem">◆ここに店舗説明</Label>
            <Label height="1rem">◆ここに店舗説明がならぶはず</Label>
          </Flex>
          <Label>東京都品川区東品川１丁目</Label>
          <Flex direction="row">
            <Flex direction="column">
              <img src="img/sinagawa1.png" alt="ほんとはピロピロしたい" height="450px"/>
              <Label>ここはほんとはスワイパーを置きたい</Label>


            </Flex>
            <Flex direction="column" gap="0rem">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.4012566583356!2d139.80864417476812!3d35.667120669996976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018890082b85bc3%3A0xcf533b02ac169ede!2z44Ki44OR44Ob44OG44Or44CI5p2x5Lqs5pyo5aC044CJ!5e0!3m2!1sja!2sjp!4v1701843061344!5m2!1sja!2sjp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <Label>住所やら</Label>
              <Label>電話番号やら</Label>
            </Flex>
          </Flex>
          <Flex direction="column" gap="0rem">
            <Label fontStyle="bold" fontSize={tokens.fontSizes.xxl}><font color={tokens.colors.red[40]}>トランクルーム空室一覧</font></Label>
            <Label fontSize={tokens.fontSizes.xs}>※画像はイメージです。各店舗での詳細は上部店舗画像をご確認ください。</Label>
            <Label fontSize={tokens.fontSizes.xs}>※画像内保管品：段ボール 奥行61×幅41×高さ38cm（140サイズ）／ 衣装ケース 奥行70×幅39×高さ30cm</Label>
          </Flex>

          <hr width="100%"/>

          <Grid templateColumns="1fr 1fr 1fr 1fr 1fr">
            <Flex direction="column">
              <Image 
                src="img/small-pc.png"
              />
              <Label>部屋タイプ 小（0.4畳〜1畳）</Label>
            </Flex>

            <Flex
              columnStart="2"
              columnEnd="6"
            >
              <Table
                caption=""
                highlightOnHover={false}>
                <TableHead>
                  <TableRow>
                    <TableCell as="th">広さ</TableCell>
                    <TableCell as="th">月額使用料</TableCell>
                    <TableCell as="th"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1.0畳 / 1.66㎡</TableCell>
                    <TableCell>18,700円</TableCell>
                    <TableCell>
                      <Button>見学</Button>
                      <Button>契約</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1.0畳 / 1.66㎡</TableCell>
                    <TableCell>19,800円</TableCell>
                    <TableCell>
                      <Button>見学</Button>
                      <Button>契約</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Flex>
          </Grid>

          <hr width="100%"/>

          <Grid templateColumns="1fr 1fr 1fr 1fr 1fr">
            <Flex direction="column">
              <Image 
                src="img/middle-pc.png"
              />
              <Label>部屋タイプ 中（1.1畳〜1.9畳）</Label>
            </Flex>

            <Flex
              columnStart="2"
              columnEnd="6"
            >
              <Table
                caption=""
                highlightOnHover={false}>
                <TableHead>
                  <TableRow>
                    <TableCell as="th">広さ</TableCell>
                    <TableCell as="th">月額使用料</TableCell>
                    <TableCell as="th"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1.2畳 / 2.00㎡</TableCell>
                    <TableCell>23,100円</TableCell>
                    <TableCell>
                      <Button>見学</Button>
                      <Button>契約</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1.5畳 / 2.48㎡</TableCell>
                    <TableCell>27,500円</TableCell>
                    <TableCell>
                      <Button>見学</Button>
                      <Button>契約</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Flex>
          </Grid>

          <hr width="100%"/>

      </Flex>
    </View>
  );
};
