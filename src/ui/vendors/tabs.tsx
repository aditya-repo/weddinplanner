import Link from "next/link";
import styles from "../../style/Tab.module.css"

interface Tab {
  id: string;
  label: string;
  content: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab }) => {
  return (
    <div>
      {/* Tabs Navigation */}
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <Link key={tab.id} href={`/test?tab=${tab.id}`} legacyBehavior>
            <a
              className={`${styles.tabLink} ${
                activeTab === tab.id ? styles.active : ""
              }`}
            >
              {tab.label}
            </a>
          </Link>
        ))}
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {tabs.map((tab) =>
          activeTab === tab.id ? <div key={tab.id}>{tab.content}</div> : null
        )}
      </div>
    </div>
  );
};

export default Tabs;
