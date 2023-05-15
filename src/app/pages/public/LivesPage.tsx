import Table from 'antd/lib/table';
import { useNavigate } from 'react-router';
import * as api from '../../api';
import columns from '../../components/LifeTableColumns';
import BasicLayout from '../../layouts/BasicLayout';

const ListLivesPage = () => {
    const { data, loading } = api.useGetLivesListQuery({
        fetchPolicy: 'cache-and-network',
    });

    const navigate = useNavigate();

    if (loading) {
        return <p>Loading ...</p>;
    }

    // data.listLives.forEach(obj => {
    //     obj.key = obj.id;
    // });

    return (
        <BasicLayout>
            <Table
                columns={columns}
                dataSource={data.listLives}
                onRow={record => ({
                    onClick: event => {
                        navigate(`/Lives/${record.id}`);
                    },
                })}
                rowKey="id"
            />
        </BasicLayout>
    );
};

export default ListLivesPage;
