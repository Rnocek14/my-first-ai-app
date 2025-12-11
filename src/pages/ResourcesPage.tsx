import React from 'react';
import './ResourcesPage.css';
import Card from '../components/Card';

const resources = {
  'Emergency & Safety': [
    { title: 'Emergency Contacts', description: 'Keep a list of emergency contacts handy.', link: '#' },
    { title: 'Safety Tips', description: 'Learn safety tips for stroke survivors.', link: '#' }
  ],
  Education: [
    { title: 'National Stroke Association', description: 'Resources and information on stroke recovery.', link: '#' },
    { title: 'Caregiver Guides', description: 'Guides for caregivers supporting stroke survivors.', link: '#' }
  ],
  'Support & Community': [
    { title: 'Support Groups', description: 'Find local support groups for stroke survivors.', link: '#' },
    { title: 'Online Forums', description: 'Join online forums for sharing experiences.', link: '#' }
  ]
};

const ResourcesPage: React.FC = () => {
  return (
    <div className='resources-page'>
      <h1>Resources</h1>
      {Object.entries(resources).map(([category, items]) => (
        <div key={category} className='resource-category'>
          <h2>{category}</h2>
          {items.map(item => (
            <Card key={item.title} title={item.title} description={item.description}>
              <a href={item.link} target='_blank' rel='noopener noreferrer'>Open resource</a>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ResourcesPage;