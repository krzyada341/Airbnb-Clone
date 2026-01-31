import EmptyState from '../components/EmptyState'
import getCurrentUser from '../actions/getCurrentUser'
import getFavoriteListings from '../actions/getFavoriteListings'
import FavoritesClient from './FavoritesClient'

const FavoritesPage = async () => {
	const favorites = await getFavoriteListings()
	const currentUser = await getCurrentUser()

	if (!currentUser) {
		return <EmptyState title="Unauthorized" subtitle="Please login" />
	}

	if (favorites.length === 0) {
		return <EmptyState title="No favorites found" subtitle={`Looks like you have no favorite listing`} />
	}

	return <FavoritesClient favorites={favorites} currentUser={currentUser} />
}
export default FavoritesPage
