import "@aws-amplify/ui-react/styles.css";
import { 
    Label,
    View,
    useTheme,
    Flex,
    TextField,
    RadioGroupField,
    Radio,
    Button,
} from '@aws-amplify/ui-react';
import { useNavigate } from "react-router-dom";
  
export default function Reserve() {
    const navigate = useNavigate();

    function handleSumbit(event) {
        event.preventDefault();
        const form = new FormData(event.target);

        //navigate('/reservcheck', { state: { form: {form} } });
        navigate('/reservcheck', { state: { 
            userType: form.get("userType"),
            name: form.get("name"),
            kana: form.get("kana"),
            mailAddress: form.get("mailAddress"),
            phoneNumber: form.get("phoneNumber")
        } });
    }

    const { tokens } = useTheme();

    return(
        <View as="form" onSubmit={handleSumbit}>
            <h1>お問い合わせ・見学予約</h1>

            <hr width="100%"/>

            <div>
                <Label fontSize={tokens.fontSizes.xl}>ご利用中のお客さまは{<a href="">こちら</a>}</Label>
                <tr/>
                <Label fontSize={tokens.fontSizes.xs}>※ご利用中のお客さまはマイページからお問合せください。</Label>
            </div>

            <hr width="100%"/>

            <div>
                <Label fontSize={tokens.fontSizes.medium}>{<a href="">よくあるご質問</a>}でもご案内しております。お問い合わせ前に一度ご確認ください。</Label>
                <tr/>
                <Label fontSize={tokens.fontSizes.xs}>※日曜・祝日・年末年始は窓口定休日となります。</Label>
                <tr/>
                <Label fontSize={tokens.fontSizes.xs}>※お問い合わせについては、営業日より順次対応させていただきます。</Label>
            </div>

            <hr width="100%"/>

            <Flex width="100%">
                <Label fontSize={tokens.fontSizes.xl} width="300px" backgroundColor={tokens.colors.blue[10]}>入力</Label>
                <Label fontSize={tokens.fontSizes.xl} width="300px">内容確認</Label>
                <Label fontSize={tokens.fontSizes.xl} width="300px">完了</Label>
            </Flex>

            <div>
                <Label fontSize={tokens.fontSizes.xs}>このバーってどうやって実装するんだろう？</Label>
                <Label fontSize={tokens.fontSizes.xs}>色は変えればいいけど、矢印っぽい枠ってどうすんだ？</Label>
                <br/>
                <Label fontSize={tokens.fontSizes.xs}>*は必須項目です。</Label>
                <hr width="100%"/>
            </div>

            <Flex  backgroundColor={tokens.colors.green[10]}>
                本来なら、お部屋を選んで来た場合は、ここにお部屋情報を表示。これもフォームに加えんと。
            </Flex>

            <div>
                <RadioGroupField name="userType" legend="個人・法人*" name="userType" defaultValue="Private" direction="row">
                  <Radio value="Private">個人</Radio>
                  <Radio value="Company">法人</Radio>
                </RadioGroupField>
                <hr width="100%"/>
                <TextField name="name" label="お名前*" placeholder="山田　太郎"></TextField>
                <TextField name="kana" label="お名前（カナ）*" placeholder="ヤマダ　タロウ"></TextField>
                <TextField name="mailAddress" label="メールアドレス*" placeholder="example@example.com"></TextField>
                <TextField name="phoneNumber" label="電話番号*" placeholder="080-xxxx-xxxx"></TextField>

                <hr width="100%"/>
                <div>
                    個人情報の取り扱いについてやら
                    <br/>
                    当社サービスのご案内やら
                </div>
                <hr width="100%"/>

                <Flex justifyContent="center">
                    <Button type="submit" variation="primary">入力内容確認</Button>
                </Flex>
            </div>            
        </View>
    )
}