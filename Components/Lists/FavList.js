import React from "react";
import { FlatList } from "react-native";

import { ProductCard } from "../cards/ProductCard";

const FavList = ({ products, pressChoose, pressToFav }) => {
	return (
		<FlatList
			data={products}
			renderItem={({ item }) => (
				<ProductCard
					item={item}
					pressChoose={pressChoose}
					pressToFav={pressToFav}
				/>
			)}
		/>
	);
};

export default FavList;
