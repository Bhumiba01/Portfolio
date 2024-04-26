import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { experiencesData } from '../../lib/data'
import 'react-vertical-timeline-component/style.min.css';
export const Experiance = ({darkMode}) => {
  return (
    <div name="Education" className='mb-28 z-20'>
      <h2 className='text-3xl font-medium capitalize mb-8 text-center'>Education</h2>
      <VerticalTimeline lineColor= {darkMode ? 'gray' : 'gray'}>
        {experiencesData.map((item, index) =>(
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: darkMode ? 'rgba(255, 255, 255, 0.05)':"#f3f4f6",
                boxShadow:"none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem"
              }}
              contentArrowStyle={{
                borderRight: darkMode ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              dateClassName='ml-5'
              icon={item.icon}
              iconStyle={{background: darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
              color: 'black'
            }}
            >
            <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </div>
  )
}
// visible={true}
//             className="vertical-timeline-element--work"
//             contentStyle={{color: '#fff',background: darkMode ? '#f3f4f6':'rgba(255, 255, 255, 0.05)'  }}
//             contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
//             lineColor="gray"
//             date={item.date}
//             dateClassName='ml-3'
//             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//             icon={<BsDashCircleFill/>}