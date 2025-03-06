import styles from './socialMedia.module.css'
import { SocialLogo } from 'social-logos';
const SocialMedia = () => {
    return (
        <div className={styles.socialMedia}>
            <SocialLogo icon="facebook" size={ 48 } />
            <SocialLogo icon="instagram" size={ 48 } />
            <SocialLogo icon="twitter" size={ 48 } />
        </div>
    )
}
 export default SocialMedia
