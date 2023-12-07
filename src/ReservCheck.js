import "@aws-amplify/ui-react/styles.css";
import { 
    Label,
    View,
    useTheme,
    Flex,
    TextField,
    Button,
} from '@aws-amplify/ui-react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
  
export default function ReserveCheck() {
    const navigate = useNavigate();

    const location = useLocation();

    //下のコンストラクタを使うと、HTMLFormElement　ぽいエラーが出る。
    //const form = new FormData(location.state.form);

    function handleSumbit(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        navigate('/reservcheck', { state: { form: {form} } });
    }

    const { tokens } = useTheme();

    return(
        <View as="form" onSubmit={handleSumbit}>
            <h1>お問い合わせ・見学予約</h1>

            <hr width="100%"/>

            <Flex width="100%">
                <Label fontSize={tokens.fontSizes.xl} width="300px" backgroundColor={tokens.colors.blue[10]}>入力</Label>
                <Label fontSize={tokens.fontSizes.xl} width="300px" backgroundColor={tokens.colors.blue[10]}>内容確認</Label>
                <Label fontSize={tokens.fontSizes.xl} width="300px">完了</Label>
            </Flex>

            <div>
                <Label>個人・法人：</Label>
                <Label>{location.state.userType}</Label>
                <br/>
                <Label>お名前：</Label>
                <Label>{location.state.name}</Label>
                <br/>
                <Label>お名前（カナ）：</Label>
                <Label>{location.state.kana}</Label>
                <br/>
                <Label>メールアドレス：</Label>
                <Label>{location.state.mailAddress}</Label>
                <br/>
                <Label>電話番号：</Label>
                <Label>{location.state.phoneNumber}</Label>
                <hr width="100%"/>

                <Flex justifyContent="center">
                    <Button type="submit" variation="primary">送信</Button>
                </Flex>
            </div>            
        </View>
    )
}