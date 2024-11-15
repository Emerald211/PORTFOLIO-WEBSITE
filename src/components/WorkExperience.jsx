import { Steps, Col, Row } from 'antd';
import { SolutionOutlined } from '@ant-design/icons';
import Headline from '../shared/Headline';

const description1 = 'Jul 2023 - Present: Implemented a creative user experience by designing and developing a responsive layout, ensuring compatibility across desktops, tablets, and smartphones. Integrated a Product Management System to manage an E-commerce website, enabling real-time updates on the status of user purchases.';
const description2 = 'Sep 2024 - Present: Ensured seamless user experience with responsive design, achieving compatibility across various devices including desktops, tablets, and smartphones. Integrated order tracking functionality, providing real-time updates to users on the status of their purchases, enhancing transparency and customer satisfaction.';

const WorkExperience = () => (
  <div className="work-experience font-serrat" style={{ padding: '2rem' }}>
    <Headline title="WORK EXPERIENCE" />
    <Row justify="center">
      <Col span={24} md={12}>
        <Steps
          direction="vertical"
          current={0}
          items={[
            {
              title: (
                <span className=' font-serrat' style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#4B0082' }}>
                  STRUCAID NG - Frontend Developer
                </span>
              ),
              description: (
                <p className=' font-serrat' style={{
                  fontSize: '1rem',
                  color: '#333',
                  margin: '0.5rem 0',
                  padding: '1rem',
                  backgroundColor: '#f9f9ff',
                  borderRadius: '8px'
                }}>
                  {description1}
                </p>
              ),
              icon: <SolutionOutlined style={{ fontSize: '24px', color: '#6a11cb' }} />,
            },
            {
              title: (
                <span className=' font-serrat' style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#4B0082' }}>
                  DevSue Tech - Frontend Developer (Contract)
                </span>
              ),
              description: (
                <p className=' font-serrat' style={{
                  fontSize: '1rem',
                  color: '#333',
                  margin: '0.5rem 0',
                  padding: '1rem',
                  backgroundColor: '#f9f9ff',
                  borderRadius: '8px'
                }}>
                  {description2}
                </p>
              ),
              icon: <SolutionOutlined style={{ fontSize: '24px', color: '#6a11cb' }} />,
            },
            {
              title: (
                <span className=' font-serrat' style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#4B0082' }}>
                  Available
                </span>
              ),
              description: (
                <p className=' font-serrat' style={{
                  fontSize: '1rem',
                  color: '#333',
                  margin: '0.5rem 0',
                  padding: '1rem',
                  backgroundColor: '#f9f9ff',
                  borderRadius: '8px'
                }}>
                  Open to new roles or gigs
                </p>
              ),
              icon: <SolutionOutlined style={{ fontSize: '24px', color: '#6a11cb' }} />,
            },
          ]}
        />
      </Col>
    </Row>
  </div>
);

export default WorkExperience;
