import React, { FC, useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import CustomButton from './src/components/CustomButton'
import GoalInput from './src/components/GoalInput'
import GoalItem from './src/components/GoalItem'
import { IGoal } from './src/types'

const App: FC = () => {
  const [courseGoals, setCourseGoals] = useState<IGoal[]>([])
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const onAddHandler = (goal: IGoal) => {
    setCourseGoals((prevState) => {
      return [...prevState, goal]
    })
    hideModal()
  }

  const onDeleteHandler = (id: string) => {
    setCourseGoals((prevState) => {
      return prevState.filter((item) => item.id != id)
    })
  }

  const showModal = () => setIsModalVisible(true)
  const hideModal = () => setIsModalVisible(false)

  return (
    <View style={styles.screen}>
      <CustomButton onPress={showModal}>Add new goal</CustomButton>
      <GoalInput
        onAdd={onAddHandler}
        isModalVisible={isModalVisible}
        onCancel={hideModal}
      />
      <FlatList<IGoal>
        data={courseGoals}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <GoalItem goal={item} onDelete={onDeleteHandler} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'stretch',
    padding: 10,
    paddingTop: 40,
  },
  list: {
    flex: 1,
  },
})

export default App
