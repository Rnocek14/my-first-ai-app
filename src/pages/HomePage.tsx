import React from 'react';

// AppKit Components (sandbox-ready)
const AppShell = ({ children }) => (
  <div className="app-shell"><main className="app-shell-main">{children}</main></div>
);

const AppPageHeader = ({ title, subtitle, rightSlot }) => (
  <header className="app-page-header">
    <div>
      <h1 className="app-page-title">{title}</h1>
      {subtitle && <p className="app-page-subtitle">{subtitle}</p>}
    </div>
    {rightSlot && <div className="app-page-header-right">{rightSlot}</div>}
  </header>
);

const AppCard = ({ title, subtitle, footer, children }) => (
  <section className="app-card">
    {(title || subtitle) && (
      <header className="app-card-header">
        {title && <h2 className="app-card-title">{title}</h2>}
        {subtitle && <p className="app-card-subtitle">{subtitle}</p>}
      </header>
    )}
    {children && <div className="app-card-body">{children}</div>}
    {footer && <footer className="app-card-footer">{footer}</footer>}
  </section>
);

const AppButton = ({ variant = "primary", className = "", children, ...rest }) => (
  <button className={`app-button app-button-${variant} ${className}`} {...rest}>
    {children}
  </button>
);

const AppGrid = ({ columns = 3, children }) => (
  <div className={`app-grid app-grid-${columns}`}>{children}</div>
);

const AppMetric = ({ label, value, tone = "default" }) => (
  <div className={`app-metric app-metric-${tone}`}> 
    <div className="app-metric-label">{label}</div>
    <div className="app-metric-value">{value}</div>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <AppShell>
      <div className='app-page'>
        <AppPageHeader title='Small wins, every day.' subtitle='Track exercises, log your day, and keep your recovery organized in one place.' />
        <AppCard title="Today's Focus">
          <AppMetric label="Motor goal" value="Hand and wrist mobility" />
          <AppMetric label="Cognitive goal" value="Short memory exercise" />
          <AppButton className='mt-4' variant='primary'>View Today’s Exercises</AppButton>
        </AppCard>
        <AppGrid columns={3}>
          <AppCard title='Exercises' description='Explore daily exercises tailored for your recovery.' />
          <AppCard title='Daily Log' description='Keep track of your daily progress and feelings.' />
          <AppCard title='Progress' description='Monitor your recovery journey over time.' />
          <AppCard title='Caregiver View' description='Tools and resources for caregivers supporting recovery.' />
        </AppGrid>
      </div>
    </AppShell>
  );
};

export default HomePage;