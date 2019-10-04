import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Tags from 'react-native-tags';
import { useDispatch, useSelector } from 'react-redux';
import R from '~/res/R';

import IngredientsSection from './IngredientsSection';
import IngredientItem from './IngredientItem';
import StepsSection from './StepsSection';
import { capitalize } from '~/lib/scripts/stringScript';

const initialRecipe = {
  id: 60,
  name: 'Crepioca recheada fit',
  description:
    'Além de ser muito saudável, essa receita não contém glúten. A crepioca recheada com frango pode substituir uma refeição e fica deliciosa com esse recheio acessível e gostoso. ',
  preparation_time: 5,
  servings: 2,
  difficulty: 'easy',
  public: true,
  creator: {
    id: 2,
    name: 'Oscar Broch',
  },
  cover: {
    url:
      'https://firebasestorage.googleapis.com/v0/b/dietapp-9c0a6.appspot.com/o/recipes%2F11i1w7eLqK%2Fcrepioca.jpg?alt=media&token=dc905dc6-3854-4691-9463-e252524b0299',
  },

  ingredients: [
    XHlQjQWmnFUL: {
      key: 'XHlQjQWmnFUL',
      order: 0,
      section: 'Crepioca',
      items: {
        nghpCGQkgQ: {
          key: 'nghpCGQkgQ',
          item: '1 colher (de sopa) Tapioca ',
          quantity: 30,
          unit: 'g',
          order: 1,
        },
        XBxXFfnFUdDjcaenBnghpCGQkgQ: {
          key: 'XBxXFfnFUdDjcaenBnghpCGQkgQ',
          item: '1 colher (de sopa) de semente de chia',
          quantity: 30,
          unit: 'g',
          order: 2,
        },
        aNZQphFpKcrtYf: {
          key: 'aNZQphFpKcrtYf',
          item: '2 ovos',
          quantity: 2,
          unit: 'un',
          order: 3,
        },
        NPEVbZbQeK: {
          key: 'NPEVbZbQeK',
          item: '1 colher (de sopa) de leite',
          quantity: 400,
          unit: 'ml',
          order: 4,
        },
        NPiBYyJskxhqqXUhqpFgoxEVbZbQeK: {
          key: 'NPiBYyJskxhqqXUhqpFgoxEVbZbQeK',
          item: 'Peito de peru ou frango desfiado',
          quantity: 200,
          unit: 'g',
          order: 5,
        },
        LJAOJpvcDtubzeZN: {
          key: 'NPiBYyJskxhqqXUhqpFgoxEVbZbQeK',
          item: 'Saladas variadas (do seu gosto)',
          quantity: 20,
          unit: 'g',
          order: 6,
          tip:
            'Exemplos: beterraba ralada, cenoura ralada, alface, tomate, cebola, pimentão',
        },
      },
    },
  ],
  sections: [
    {
      steps: [
        {
          order: '0',
          text: 'Mistura a farinha',
          tip: 'Use uma vasilha redonda',
        },
        {
          order: '0',
          text: 'Mistura a farinha',
          tip: 'Use uma vasilha redonda',
        },
      ],
      id: 96,
      order: 0,
      recipe_id: 60,
      title: 'Massa',
    },
    {
      steps: [
        {
          order: '0',
          text: 'Mistura a Doce',
          tip: 'Use uma vasilha redonda',
        },
        {
          order: '0',
          text: 'Mistura a Leite',
          tip: 'Use uma vasilha redonda',
        },
      ],
      id: 97,
      order: 1,
      recipe_id: 60,
      title: 'Recheio',
    },
  ],
};

const tags = ['high protein', 'low carb', 'chicken', 'lunch', 'easy'];

export default function ShowRecipe() {
  const [recipe, SetRecipe] = useState(initialRecipe);
  const [tags, SetTags] = useState([]);

  return (
    <View style={styles.body}>
      <ScrollView style={styles.scrollContainer}>
        {/* <Text>{JSON.stringify(this.state.recipeData, null, 3)}</Text> */}
        <Image source={{ uri: recipe.url }} style={styles.recipeImage} />
        <View style={styles.headerView}>
          <Text style={styles.nameTxt}>{recipe.name}</Text>
          <View style={styles.rowView}>
            <MaterialCommunityIcons name="fire" color="#196a65" size={30} />
            <Text style={styles.caloriesTxt}>{recipe.calories} kcal</Text>
          </View>
          <View style={styles.separator} />
          <Text style={styles.descriptionTxt}>{recipe.description}</Text>

          <View style={styles.separator} />

          <View style={styles.infoRowView}>
            <View style={styles.infoView}>
              <View style={[styles.infoInsideView, styles.infoInsideLeftView]}>
                <Icon name="timer" size={25} color="#196A65" />
                <Text style={styles.infoTxt}>
                  {recipe.preparation_time} min
                </Text>
              </View>
              <View style={[styles.infoInsideView, styles.infoInsideLeftView]}>
                <Icon name="group" size={25} color="#196A65" />
                <Text style={styles.infoTxt}>
                  Serve {recipe.servings} pessoa(s)
                </Text>
              </View>
            </View>

            <View style={styles.infoView}>
              <View style={[styles.infoInsideView, styles.infoInsideRightView]}>
                <Icon name="shopping-cart" size={25} color="#196A65" />
                <Text style={styles.infoTxt}>
                  {recipe.preparation_time} ingredientes
                </Text>
              </View>
              <View style={[styles.infoInsideView, styles.infoInsideRightView]}>
                <Icon name="network-check" size={25} color="#196A65" />
                <Text style={styles.infoTxt}>{recipe.difficulty}</Text>
              </View>
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.tagsView}>
            <Tags
              readonly
              initialText="monkey"
              // textInputProps={{
              //     placeholder: "Any type of animal"
              // }}
              initialTags={tags}
              onChangeTags={tags => console.log(tags)}
              onTagPress={(index, tagLabel, event, deleted) => { }}
              containerStyle={{ justifyContent: 'center' }}
              inputStyle={{ backgroundColor: 'white' }}
              renderTag={({
                tag,
                index,
                onPress,
                deleteTagOnPress,
                readonly,
              }) => (
                  <TouchableOpacity
                    key={`${tag}-${index}`}
                    onPress={onPress}
                    style={styles.tagTouch}
                  >
                    <Text style={styles.tagTxt}>#{capitalize(tag)}</Text>
                  </TouchableOpacity>
                )}
            />
          </View>
        </View>

        <View style={styles.ingredientsView}>
          <View style={styles.ingredientsHeaderView}>
            <MaterialCommunityIcons
              name="food-variant"
              color="#196a65"
              size={30}
            />
            <Text style={styles.ingredientsTxt}>Ingredientes</Text>
          </View>
          <View style={[styles.separator, { marginBottom: 0, height: 0.9 }]} />
          <IngredientsSection data={recipe.ingredients} />
        </View>

        <View style={styles.intructionsView}>
          <View style={styles.ingredientsHeaderView}>
            <MaterialCommunityIcons name="rice" color="#196a65" size={30} />
            <Text style={styles.ingredientsTxt}>Modo de preparo</Text>
          </View>
          <View style={[styles.separator, { marginBottom: 0, height: 0.9 }]} />
          <StepsSection data={recipe.instructions} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  recipeImage: {
    height: 300,
    width: '100%',
  },
  headerView: {
    marginBottom: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    ...R.styles.shadow,
  },
  nameTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#196A65',
    marginTop: 10,
  },
  rowView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 5,
  },
  caloriesTxt: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  descriptionTxt: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'justify',
  },

  infoRowView: {
    flexDirection: 'row',
  },
  infoView: {
    flex: 1,
  },
  infoInsideView: {
    flex: 1,
    flexDirection: 'row',
    padding: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#196A65',
  },
  infoInsideLeftView: {
    marginRight: 5,
    marginBottom: 5,
  },
  infoInsideRightView: {
    marginRight: 0,
    marginBottom: 5,
  },
  infoTxt: {
    flex: 1,
    fontSize: 15,
    padding: 5,
  },

  tagsView: {
    alignItems: 'center',
  },
  tagTouch: {
    justifyContent: 'center',
    height: 30,
    margin: 5,
    paddingHorizontal: 10,
    backgroundColor: '#196A65',
    borderRadius: 15,
  },
  tagTxt: {
    fontSize: 14,
    color: '#fff',
  },
  ingredientsView: {
    marginBottom: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    ...R.styles.shadow,
  },
  ingredientsHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ingredientsTxt: {
    textTransform: 'uppercase',
    fontSize: 18,
    paddingVertical: 5,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: '#196a65',
  },

  intructionsView: {
    marginBottom: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    ...R.styles.shadow,
  },

  separator: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eee',
    height: 0.7,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});

// return (
//   // Espera carregar
//   if (this.state.recipeData == null) {
//   return (
//     <View
//       style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
//     >
//       <ActivityIndicator size="large" />
//       <Text style={styles.txtName}>Carregando...</Text>
//     </View>
//   );
// }
