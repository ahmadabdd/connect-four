// components
import { Form, Input, Button } from "antd";
import MainLayout from "../../layouts/main-layout/MainLayout";

// style
import "./NewGame.css";

// cookies
import { useCookies } from "react-cookie";

// router
import { useNavigate } from "react-router-dom";

const ConnectFourForm: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [, setCookie] = useCookies(['names']);

  const handleSubmit = (values: any) => {
    console.log(values)
    setCookie('names', JSON.stringify(values));
    navigate("/");
  };

  return (
    <MainLayout className="new-game-container">
      <div className="header">
        <h1>Hey!</h1>
        <h2>Please enter your names</h2>
      </div>
      <Form className="form" form={form} onFinish={handleSubmit}>
        <div className="row">
            <h2>Red player</h2>
            <Form.Item
            name="redPlayer"
            rules={[
                { required: true, message: "Please enter the red player's name" },
            ]}
            >
            <Input />
            </Form.Item>
        </div>
        <div className="row">
            <h2>Yellow player</h2>
            <Form.Item
            name="yellowPlayer"
            rules={[
                {
                required: true,
                message: "Please enter the yellow player's name",
                },
            ]}
            >
            <Input />
            </Form.Item>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Start Game
          </Button>
        </Form.Item>
      </Form>
    </MainLayout>
  );
};

export default ConnectFourForm;
