<template>
	<div class="bg-gray-900 rounded-l-lg max-h-screen sticky top-0">
		<div class="flex flex-col gap-y-4 px-4 min-h-screen max-h-screen">
			<div class="bg-gray-900 flex flex-col gap-y-4 mt-6">
				<div class="flex gap-x-2">
					<button
						@click="active = option as Options"
						v-for="option in options"
						class="py-2 px-3 rounded-lg text-sm capitalize font-semibold border border-gray-600"
						:class="
							active === option
								? 'bg-primary text-white'
								: 'text-primary bg-inherit'
						"
					>
						{{ option }}
					</button>
				</div>
				<div class="flex items-center gap-x-2">
					<button
						class="p-1 text-primary"
						@click="table--"
						:disabled="table === 0"
					>
						<Icon w="25" h="25" icon="akar-icons:triangle-left" />
					</button>
					<h3 class="text-white text-xl">{{ tables[table] }}</h3>
					<button
						class="p-1 text-primary"
						@click="table++"
						:disabled="table === tables.length - 1"
					>
						<Icon w="25" h="25" icon="akar-icons:triangle-right" />
					</button>
				</div>
			</div>
			<div
				class="flex flex-col max-h-[50%] gap-y-2 overflow-y-auto scrollbar-hide"
			>
				<HomeCartItem
					v-for="item in items"
					:name="item.name"
					:price="item.price"
					:qty="item.qty"
					:id="item.id"
					:key="item.id"
				/>
			</div>
			<div class="bg-gray-900 flex flex-col gap-y-4 py-4 mt-auto">
				<div class="flex justify-between items-center">
					<span class="text-sm text-gray-600">Sub total</span>
					<span class="text-sm text-white text-right"
						>$ {{ subtotal.toFixed(2) }}</span
					>
				</div>
				<div class="flex justify-between items-center">
					<span class="text-sm text-gray-600">Tax</span>
					<span class="text-sm text-white text-right"
						>$ {{ tax.toFixed(2) }}</span
					>
				</div>

				<button
					class="w-full text-center py-3 bg-primary text-white rounded-lg shadow-primary"
					@click="handleSendOrder()"
				>
					Place Order
				</button>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
type Options = 'dine in' | 'to go' | 'delivery';
const table = ref(0);
const tables = [
	'Table 1',
	'Table 2',
	'Table 3',
	'Table 4',
	'Table 5',
	'Table 6',
	'Table 7',
	'Table 8',
	'Table 9',
	'Table 10',
];
const active = ref<Options>('dine in');
const options = ['dine in', 'to go', 'delivery'];
const cartStore = useCartStore();
const { items, subtotal, tax, total } = storeToRefs(cartStore);
const orderStore = useOrderStore();
const handleSendOrder = () => {
	orderStore.addOrder({
		to: tables[table.value],
		dishes: items.value,
		option: active.value,
		subtotal: subtotal.value,
		tax: tax.value,
		total: total.value,
	});
};
</script>
