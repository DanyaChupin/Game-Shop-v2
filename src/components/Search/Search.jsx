import styles from './Search.module.scss'

const Search = () => {
  return (
    <div className={styles.search}>
      <img
        className={styles.search_icon}
        src="/assets/icons/search.png"
        alt="search"
      />
      <input
        className={styles.search_input}
        type="text"
        placeholder="Search..."
      />
    </div>
  )
}

export default Search
