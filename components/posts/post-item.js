import Image from "next/image"
import Link from "next/link"
import classes from "./post-item.module.css"

const PostItem = (props) => {
    const {title, image, excerpt, date, slug} = props.post

    const formatttedDate = new Date(date).toLocaleDateString('en-Us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const imagePath = `/images/posts/${slug}/${image}`
  return (
    <li className={classes.post}>
        <Link>
            <div className={classes.image}>
                <Image src={imagePath} alt={title} width={300} height={200}/>
            </div>
            <div classname={classes.content}>
                <h3>{title}</h3>
                <time>{formatttedDate}</time>
                <p>{excerpt}</p>
            </div>
        </Link>
    </li>
  )
}

export default PostItem