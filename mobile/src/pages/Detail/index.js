import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png';


import styles from './styles';

function Detail(){
    const navigation = useNavigation();
    const route = useRoute();

    const caso = route.params.caso;
    const message = `Olá ${caso.name} estou entrando em contado pois gostaria de ajudar no caso "${caso.title}" com 
    o valor de ${Intl.NumberFormat('pt-BR', {
        style:'currency', 
        currency:'BRL'}).format(caso.value)}`

    function back() {
        navigation.goBack();
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject:`Herói do caso: ${caso.title}`,
            recipients:[caso.email],
            body: message
        });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${caso.whatsapp}&text=${message}`);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>

                <TouchableOpacity onPress={back}>
                    <Feather size={28} name="arrow-left" color="#e02041"/>
                </TouchableOpacity>
            </View>
            <View style={styles.caso}>
                <Text style={styles.casoProperty, {marginTop:0}}>ONG:</Text>
                <Text style={styles.casoValue}>{caso.name} de {caso.city}/{caso.uf}</Text>

                <Text style={styles.casoProperty}>CASO:</Text>
                <Text style={styles.casoValue}>{caso.title}</Text>

                <Text style={styles.casoProperty}>VALOR:</Text>
                <Text style={styles.casoValue}>
                    {Intl.NumberFormat('pt-BR', {
                    style:'currency', 
                    currency:'BRL'}).format(caso.value)}
                </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Detail;