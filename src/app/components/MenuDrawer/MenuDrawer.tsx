import { Fragment, useEffect, useState } from 'react'
import { getNextWeekMenuQuery_getNextWeekMenu } from '../../services/mealServices/queries/__generated__/getNextWeekMenuQuery'
import mealServices from '../../services/mealServices'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'


type Anchor = 'right'

const MenuDrawer = () => {

    const [state, setState] = useState({
        right: false,
    })

    const [meals, setMeals] = useState<getNextWeekMenuQuery_getNextWeekMenu | null>(null)

    const getNextWeekMenu = () => {
        mealServices
            .getNextWeekMenu()
            .then(data => {
                console.log('desde el server--->', data)
                setMeals(data)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getNextWeekMenu()
    }, [state])

    const toggleDrawer = (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        }

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <h4>Platos Únicos</h4>
                {meals?.unique && meals?.unique.map(meal => (
                    <ListItem key={meal?.id} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {meal?.name}
                            </ListItemIcon>
                            {/* <ListItemText primary={meal?.name} /> */}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <h4>Platos Ligeros</h4>
                {meals?.light && meals?.light.map(meal => (
                    <ListItem key={meal?.id} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {meal?.name}
                            </ListItemIcon>
                            {/* <ListItemText primary={meal?.name} /> */}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <h4>Platos Completos</h4>
                {meals?.full && meals?.full.map(meal => (
                    <ListItem key={meal?.id} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {meal?.name}
                            </ListItemIcon>
                            {/* <ListItemText primary={meal?.name} /> */}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <h4>Veggie</h4>
                {meals?.veggie && meals?.veggie.map(meal => (
                    <ListItem key={meal?.id} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {meal?.name}
                            </ListItemIcon>
                            {/* <ListItemText primary={meal?.name} /> */}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <h4>Entrantes</h4>
                {meals?.starter && meals?.starter.map(meal => (
                    <ListItem key={meal?.id} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {meal?.name}
                            </ListItemIcon>
                            {/* <ListItemText primary={meal?.name} /> */}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <h4>Postres</h4>
                {meals?.dessert && meals?.dessert.map(meal => (
                    <ListItem key={meal?.id} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {meal?.name}
                            </ListItemIcon>
                            {/* <ListItemText primary={meal?.name} /> */}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {(['right'] as const).map((anchor) => (
                <Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>Próximo Menú</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </Fragment>
            ))}
        </div>
    )
}

export default MenuDrawer