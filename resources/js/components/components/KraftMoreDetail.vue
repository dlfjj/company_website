<template>
    <main class="p-5" style="padding-bottom: 50px">
        <a href="#/Product/kraftbag"><b-button class="btn-white shadow-none border border-dark" style="margin-left: 1.7%"><i class="far fa-arrow-alt-circle-left fa-2x"></i></b-button></a>

        <div class="title-box text-center">
            <h2 class="text-uppercase">stocklist</h2>
            <p>{{ paragraph }}</p>
        </div>
        <div class="container dark-grey-text mt-5">
            <b-table :items="items" :fields="fields" outlined bordered hover small>
                <template slot="table-caption">&#42; all cargo's weight unit measures in pounds (lbs)</template>
            </b-table>
        </div>
    </main>
</template>

<script>
    export default {
        name: "MoreDetail",
        data() {
            return {
                paragraph: 'Packing Detail and Available Size for Orders',
                fields: [
                    {key:'length in inches',class:'text-center'},
                    {key:'bags per skid', class:'text-center'},
                    {key:'stackable skids', class:'text-center'},
                    {key:'bag weight', class:'text-center'},
                    {key:'total bags weight', class:'text-center'},
                    {key:'skid weight', class:'text-center'},
                    {key:'Gross weight', class:'text-center'},
                ],
                items: [
                    { 'length in inches': '36 x 36','bags per skid': 450, 'stackable skids': 2, 'bag weight': 0.783, 'total bags weight':352.35, 'skid weight': 20, 'Gross weight': 372.35 },
                    { 'length in inches': '36 x 48','bags per skid': 435, 'stackable skids': 2, 'bag weight': 0.915, 'total bags weight':398.03, 'skid weight': 20, 'Gross weight': 418.03 },
                    { 'length in inches': '36 x 60','bags per skid': 410, 'stackable skids': 2, 'bag weight': 1.239, 'total bags weight':507.99, 'skid weight': 20, 'Gross weight': 527.99 },
                    { 'length in inches': '36 x 66','bags per skid': 390, 'stackable skids': 2, 'bag weight': 1.400, 'total bags weight':546.00, 'skid weight': 20, 'Gross weight': 566.00 },
                    { 'length in inches': '36 x 71','bags per skid': 350, 'stackable skids': 2, 'bag weight': 1.510, 'total bags weight':528.50, 'skid weight': 20, 'Gross weight': 548.50 },
                    { 'length in inches': '36 x 83','bags per skid': 340, 'stackable skids': 2, 'bag weight': 1.675, 'total bags weight':569.50, 'skid weight': 20, 'Gross weight': 589.50 },
                    { 'length in inches': '36 x 88','bags per skid': 450, 'stackable skids': 2, 'bag weight': 1.885, 'total bags weight':603.20, 'skid weight': 20, 'Gross weight': 623.20 },
                    { 'length in inches': ' ' },
                    { 'length in inches': '48 x 48','bags per skid': 450, 'stackable skids': 2, 'bag weight': 1.225, 'total bags weight':441.00, 'skid weight': 20, 'Gross weight': 461.00 },
                    { 'length in inches': '48 x 60','bags per skid': 450, 'stackable skids': 2, 'bag weight': 1.445, 'total bags weight':462.40, 'skid weight': 20, 'Gross weight': 482.40 },
                    { 'length in inches': '48 x 66','bags per skid': 450, 'stackable skids': 2, 'bag weight': 1.685, 'total bags weight':505.50, 'skid weight': 20, 'Gross weight': 525.50 },
                    { 'length in inches': '48 x 71','bags per skid': 450, 'stackable skids': 2, 'bag weight': 2.030, 'total bags weight':548.10, 'skid weight': 20, 'Gross weight': 568.10 },
                    { 'length in inches': '48 x 83','bags per skid': 450, 'stackable skids': 2, 'bag weight': 2.360, 'total bags weight':566.40, 'skid weight': 20, 'Gross weight': 586.40 },
                    { 'length in inches': '48 x 88','bags per skid': 450, 'stackable skids': 2, 'bag weight': 2.515, 'total bags weight':528.15, 'skid weight': 20, 'Gross weight': 548.15 },
                ]
            }
        }
    }
</script>

<style scoped>

</style>