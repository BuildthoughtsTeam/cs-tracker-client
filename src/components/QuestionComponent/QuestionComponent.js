import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useHistory } from "react-router-dom"

const useStyles = makeStyles({
  container: {},
  root: {
    maxWidth: 350,
  },
  media: {
    height: 140,
  },
})

const QuestionComponent = ({
  id,
  name,
  difficultyLevel,
  dateOfRevision,
  dateOfCompletion,
  onClickLink,
}) => {
  const classes = useStyles()
  const history = useHistory()


  const displayCurrentQuestion= () => {
    history.push('/currentQuestion')
  }

  return (
    <div classeName="container">
      <Card className={classes.root} onClick={displayCurrentQuestion}>
        <CardActionArea>
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Difficulty: {difficultyLevel}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Revision Date: {dateOfRevision}
          </Button>
          <Button size="small" color="primary">
            Completion Date: {dateOfCompletion}
          </Button>
          
        </CardActions>
      </Card>
    </div>
  )
}
export default QuestionComponent
