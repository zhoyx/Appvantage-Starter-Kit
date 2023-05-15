import { Card, Descriptions, List, Tag, Typography } from 'antd';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import * as api from '../../api';
import BasicLayout from '../../layouts/BasicLayout';

const GetLifePage = () => {
    const { id } = useParams();
    const { Title } = Typography;

    const { data, loading } = api.useGetLifeQuery({
        fetchPolicy: 'cache-and-network',
        variables: {
            id,
        },
    });

    if (loading) {
        return null;
    }

    // const modifiedData = { ...data.getLife, hobbies: data.getLife.hobbies.join(', ') };
    // const dataArr: string[] = [];
    // Object.keys(modifiedData).forEach(key => key !== '__typename' && dataArr.push(`${key}: ${modifiedData[key]}`));

    const life = data.getLife;

    return (
        <BasicLayout>
            <Card>
                <Descriptions title="Life Info">
                    <Descriptions.Item label="First Name">{life.firstName}</Descriptions.Item>
                    <Descriptions.Item label="Last Name">{life.lastName}</Descriptions.Item>
                    <Descriptions.Item label="Birthday">{dayjs(life.birthday).format('DD/MM/YYYY')}</Descriptions.Item>
                    <Descriptions.Item label="Description">{life.description}</Descriptions.Item>
                    <Descriptions.Item label="Title">{life.title ? life.title : '-'}</Descriptions.Item>
                    <Descriptions.Item label="ID">{life.id}</Descriptions.Item>
                    <Descriptions.Item label="Hobbies">
                        {life.hobbies.map((hobby, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <Tag key={`${life.id}:${index}`} color="#2db7f5">
                                {hobby}
                            </Tag>
                        ))}
                    </Descriptions.Item>
                </Descriptions>
            </Card>
        </BasicLayout>
    );
};

export default GetLifePage;
