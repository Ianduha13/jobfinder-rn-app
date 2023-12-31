import { useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native"
import { useRouter } from "expo-router"
import useFetch from "../../../hooks/useFetch"

import styles from "./popularjobs.style"
import { COLORS, SIZES } from "../../../constants"
import PopularJobCard from "../../common/cards/popular/PopularJobCard"

const Popularjobs = () => {
  const router = useRouter()
  const [selectedJob, setSelectedJob] = useState(null)
  // const { data, isLoading, error } = useFetch("search", {
  //   query: "React Developer",
  //   num_pages: "1",
  // })
  const isLoading = false
  const error = false
  const data = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={() => {}}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs
