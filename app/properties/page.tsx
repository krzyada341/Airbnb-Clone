import getCurrentUser from '../actions/getCurrentUser'
import getListings from '../actions/getListing'
import EmptyState from '../components/EmptyState'
import PropertiesClient from './PropertiesClient'

const PropertiesPage = async () => {
	const currentUser = await getCurrentUser()

	if (!currentUser) {
		return <EmptyState title="Unauthorized" subtitle="Please login" />
	}

	const listings = await getListings(Promise.resolve({ userId: currentUser.id }))

	if (listings.length === 0) {
		return <EmptyState title="No properties found" subtitle={`Looks like you have no properties`} />
	}

	return <PropertiesClient listings={listings} currentUser={currentUser} />
}
export default PropertiesPage
