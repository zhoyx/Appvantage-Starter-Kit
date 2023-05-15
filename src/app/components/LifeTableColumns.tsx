import { Tag } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import dayjs from 'dayjs';
import * as api from '../../api';

const columns: ColumnsType<api.Life> = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'fullName',
    },
    {
        title: 'Description',
        dataIndex: 'description',
    },
    {
        title: 'Birthday',
        dataIndex: 'birthday',
        render: birthday => <div>{dayjs(birthday).format('DD/MM/YYYY')}</div>,
    },
    {
        title: 'Hobbies',
        dataIndex: 'hobbies',
        render: (_, { hobbies }) => (
            <>
                {hobbies.map((hobby, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Tag key={index} color="#2db7f5">
                        {hobby}
                    </Tag>
                ))}
            </>
        ),
    },
    {
        title: 'Title',
        dataIndex: 'title',
        render: (_, { title }) => title || '-',
    },
];

export default columns;
